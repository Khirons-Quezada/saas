function getCategorias () {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/services/svc_get_categorias.php", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
