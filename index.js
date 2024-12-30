

// Tâche 1 : Itérer avec Async/Await
// boucle for...

async function iterate(array) {
    for (let item of array) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // durée d'attente 1 seconde
      console.log(item);
    }
  }
  console.log("Tableau des valeurs :");
  iterate([1, 2, 3]);
  

  // Tâche 2 : Attendre un appel

  async function waitCall() {
    
    // Un appel API avec un délai de 2 secondes
    const data = await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    
    console.log("Obtention de données à partir de l'API", data);
  }


  setTimeout(() => {
    console.log("Test de la tâche 2 :");
    waitCall();
  }, 6000);



  
  // Tâche 3 : Gérer les erreurs :
  async function waitCall() {
    try {
      console.log("Début de l'appel API...");
      
      // Simuler un appel API qui peut réussir ou échouer
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve("Données de l'API");
          } else {
            reject("Erreur de l'API");
          }
        }, 2000);
      });
      
      console.log("Données reçues :", data);
    } catch (error) {
      console.log("Oups ! Une erreur s'est produite :", error);
    }
  }
  
  setTimeout(() => {
    console.log("\nTest de la tâche 3 :");
    waitCall();
  }, 9000);
  
  