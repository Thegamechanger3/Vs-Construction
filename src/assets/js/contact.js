// ============================================
// FORMULAIRE DE CONTACT - VS CONSTRUCTION
// ============================================

function submitForm() {
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const tel = document.getElementById('tel').value;
    const ville = document.getElementById('ville').value;
    const type = document.getElementById('type').value;
    const rgpd = document.getElementById('rgpd').checked;
    
    if (!prenom || !nom || !tel || !ville || !type) { 
        alert('Merci de remplir tous les champs obligatoires (*)'); 
        return; 
    }
    
    if (!rgpd) { 
        alert('Merci d\'accepter la politique de confidentialité'); 
        return; 
    }
    
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('formSuccess').classList.add('visible');
}

// Pour une vraie soumission de formulaire, remplacez par un vrai endpoint
// function submitForm() {
//     document.getElementById('contactForm').submit();
// }