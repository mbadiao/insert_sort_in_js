function insertionSort(arr) {
    // Parcourir chaque élément du tableau (sauf le premier)
    for (let i = 1; i < arr.length; i++) {
      // Stocker la valeur actuelle pour insertion ultérieure
      const currentValue = arr[i];
      let j = i - 1;
  
      // Décaler les éléments de la partie triée (avant l'élément actuel)
      // jusqu'à ce que l'on trouve la bonne position pour l'élément actuel
      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j]; // Décaler l'élément vers la droite
        j--; // Décrémenter j pour examiner l'élément précédent
      }
  
      // Insérer l'élément actuel à sa position triée correcte
      arr[j + 1] = currentValue;
    }
  
    return arr; // Retourner le tableau trié
  }
  