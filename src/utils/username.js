const FLOWERS =[
    'Camellia',
    'Crocus',
    'Hosta',
    'Gladiolus',
    'Bougainvillea',
    'Chrysanthemum',
    'Oleander',
    'Narcissus',
    'Hollyhock',
    'Gayfeather'
]

const ADJECTIVES =[
    'jobless',
    'glamorous',
    'uncovered',
    'acceptable',
    'sufficient',
    'overconfident',
    'wild',
    'frantic',
    'scrawny',
    'classy'
]

function getRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random()*10)]
    const flowers = FLOWERS[Math.floor(Math.random()*10)]
    return `${adj}-${flowers}`
}


module.exports ={
    getRandomUsername
}
