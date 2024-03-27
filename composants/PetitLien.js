export default { // Exportation du module
    props: { // Propriétés du composant
        lien: { // Nom de la propriété
            type: String, // Type de la propriété
            required: true // Propriété obligatoire
        },
        contenu: {
        type: String,
        required: false
        }
    },
    template: `
        <a :href="lien">{{ contenu || lien }}</a>
    `
    }
