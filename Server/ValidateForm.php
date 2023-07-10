<?php
echo 'test'
session_start();

// Récupérer les données du formulaire envoyées depuis l'application React
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Valider et nettoyer les données reçues
    $name = cleanInput($_POST['name']);
    $prenom = cleanInput($_POST['prenom']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = cleanInput($_POST['message']);

    // Vérifier si les champs requis sont remplis
    if (empty($name) || empty($prenom) || empty($email) || empty($message)) {
        $response = array('error' => 'Veuillez remplir tous les champs du formulaire');
        echo json_encode($response);
        exit;
    }

    // Vérifier si l'adresse email est valide
    if (!$email) {
        $response = array('error' => 'Adresse e-mail invalide');
        echo json_encode($response);
        exit;
    }

    // Envoi de l'e-mail
    $to = 'dwaincontact@gmail.com';
    $subject = 'Nouveau message de formulaire de contact';
    $messageBody = "Nom: $name\n";
    $messageBody .= "Prénom: $prenom\n";
    $messageBody .= "E-mail: $email\n";
    $messageBody .= "Message: $message\n";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $messageBody, $headers)) {
        $response = array('message' => 'Formulaire soumis avec succès');
        echo json_encode($response);
        exit;
    } else {
        $response = array('error' => 'Erreur lors de l\'envoi de l\'e-mail');
        echo json_encode($response);
        exit;
    }
}

// Échapper les caractères spéciaux pour éviter les injections de code
function cleanInput($input) {
    $output = htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    return $output;
}
?>
