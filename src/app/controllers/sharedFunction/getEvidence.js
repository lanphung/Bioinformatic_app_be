'use strict';

const cond = [
    'breast',
    'hepatocellular_carcinoma',
    'lung',
    'large_intestine',
    'thyroid',
];

const AA_list = {
    A: 'Ala',
    R: 'Arg',
    N: 'Asn',
    D: 'Asp',
    C: 'Cys',
    E: 'Glu',
    Q: 'Gln',
    G: 'Gly',
    H: 'His',
    I: 'Ile',
    L: 'Leu',
    K: 'Lys',
    M: 'Met',
    F: 'Phe',
    P: 'Pro',
    S: 'Ser',
    T: 'Thr',
    W: 'Trp',
    Y: 'Tyr',
    V: 'Val',
};

const AA_list_r = {
    Ala: 'A',
    Arg: 'R',
    Asn: 'N',
    Asp: 'D',
    Cys: 'C',
    Glu: 'E',
    Gln: 'Q',
    Gly: 'G',
    His: 'H',
    Ile: 'I',
    Leu: 'L',
    Lys: 'K',
    Met: 'M',
    Phe: 'F',
    Pro: 'P',
    Ser: 'S',
    Thr: 'T',
    Trp: 'W',
    Tyr: 'Y',
    Val: 'V',
    Ter: '*',
};

const _get_evi_mixed = (jsonObject, scope) => {
    let drug_result = [];
    for (let it of cond) {
        const data = require(`../../../../data/dataDrug/${it}_${scope}_BE.json`);
        const mutInfo = jsonObject.mutations;
    //testing
        for (const item in mutInfo) {
            let pr = mutInfo[item]['Protein']?.split('p.')[1];
            if (pr !== undefined) {
                for (let it in AA_list_r) {
                    pr = pr.replace(it, AA_list_r[it]);
                }
            }
            for (let j = 0; j < data.length; j++) {
                if (
                    data[j].aa_mutation.includes(pr) &&
                    data[j].gene_name == mutInfo[item]['Gene']
                ) {
                    drug_result.push(data[j]);
                }
            }
        }
    }
    return [...new Set(drug_result)];
};

const _get_evi = (condition, gene, protein) => {
    const data = require(`../../../../data/dataDrug/${condition}_world_BE.json`);
    let drug_result = [];
    for (let i = 0; i < data.length; i++) {
        if (
            data[i].aa_mutation.includes(protein) &&
            data[i].gene_name == gene
        ) {
            drug_result.push(data[i]);
        }
    }
    return [...new Set(drug_result)];
};

module.exports = { _get_evi_mixed, _get_evi };
