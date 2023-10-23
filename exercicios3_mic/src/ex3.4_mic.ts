//3.4. Baseando-se no exemplo do código fornecido pelo professor, desenvolva um pequeno sistema especialista, configurável, que informa se um usuário está ou não 
//com sintomas que podem ser diagnosticados como uma determinada doença. Seu sistema especialista deve possuir uma base de regras configurável que não seja hard coded.
// Exemplifique a utilização desse sistema para pelo menos 2 doenças com sintomas bem distintos (devem conter mais de um sintoma característico na base de regras).

import * as readline from 'readline';

type Rule_jmm = {
    disease: string;
    symptoms: string[];
    consequent: string;
};

type UserSymptoms_jmm = Record<string, boolean>;

class ExpertSystem_jmm {
    private rules: Rule_jmm[];

    constructor(rules: Rule_jmm[]) {
        this.rules = rules;
    }

    diagnose(userSymptoms: UserSymptoms_jmm): string[] {
        const diagnoses: string[] = [];

        for (const rule of this.rules) {
            if (this.symptomsMatchRule(rule.symptoms, userSymptoms)) {
                diagnoses.push(rule.consequent);
            }
        }

        return diagnoses;
    }

    private symptomsMatchRule(ruleSymptoms: string[], userSymptoms: UserSymptoms_jmm): boolean {
        for (const symptom of ruleSymptoms) {
            if (!userSymptoms[symptom]) {
                return false;
            }
        }
        return true;
    }
}

// Função para obter os sintomas do usuário interativamente usando readline
async function getUserSymptoms(): Promise<UserSymptoms_jmm> {
    const userSymptoms: UserSymptoms_jmm = {};
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for (const symptom of ['febre', 'dor_de_garganta', 'nariz_entupido', 'coceira_na_pele', 'espirros_frequentes', 'olhos_vermelhos']) {
        const userInput = await new Promise<string>((resolve) => {
            rl.question(`Você apresenta sintomas como: ${symptom}? (Sim ou Não): `, (answer) => {
                resolve(answer.toLowerCase());
            });
        });

        if (userInput == 'sim') {
            userSymptoms[symptom] = true;
        } else {
            userSymptoms[symptom] = false;
        }
    }

    rl.close();
    return userSymptoms;
}

// Obtenha os sintomas do usuário
getUserSymptoms().then((userSymptoms) => {
    // Defina as regras para o sistema especialista externamente (não hard coded)
    const externalRules: Rule_jmm[] = [
        {
            disease: 'Gripe',
            symptoms: ['febre', 'dor_de_garganta', 'nariz_entupido'],
            consequent: 'Você pode estar com Gripe! Procure um médico!',
        },
        {
            disease: 'Alergia',
            symptoms: ['coceira_na_pele', 'espirros_frequentes', 'olhos_vermelhos'],
            consequent: 'Você pode estar com Alergia! Procure um médico!',
        },
    ];

    // Crie uma instância do sistema especialista com as regras configuráveis
    const expertSystem = new ExpertSystem_jmm(externalRules);

    // Realize o diagnóstico
    const diagnoses = expertSystem.diagnose(userSymptoms);

    if (diagnoses.length == 0) {
        console.log('Você não parece estar nem com gripe, nem com alergia. Procure um médico para um melhor diagnóstico!');
    } else {
        console.log('Diagnósticos possíveis:');
        for (const diagnosis of diagnoses) {
            console.log(diagnosis);
        }
    }
});