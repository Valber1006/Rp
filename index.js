function ligma(){
    var name = document.getElementById("userName").value;
    var qSeguidores = document.getElementById("qSeguidores").value;
    var gSeguidores = document.getElementById("gSeguidores").value;
    var curtidas = document.getElementById("curtidas").value;
    var comentarios = document.getElementById("comentarios").value;
    var views = document.getElementById("views").value;
    var nPosts = document.getElementById("nPosts").value;
    var horario = document.getElementById("horario").value;
    var mPost = document.getElementById("mPost").value;
    var cPost = document.getElementById("cPost").value;
    var pSeguidores = document.getElementById("pSeguidores").value;

    document.getElementById("name").innerHTML=("*Parabéns 🎉 a semana foi incrível 🤩, fico muito feliz de ver sua evolução*😁" + name)
    document.getElementById("vSeguidores").innerHTML=("*Ganho/Perda de seguidores:*" + gSeguidores +
 + "(Quantos seguidores você ganhou ou perdeu na semana)")
 
 document.getElementById("xSeguidores").innerHTML=("*Seguidores👥:*" + qSeguidores + 
  "(Quantidade de seguidores atual)")

  document.getElementById("ccurtidas").innerHTML=("*Quantidade de curtidas❤️:*" + curtidas +
  "(Total de curtidas na semana)")

  document.getElementById("ccomentarios").innerHTML=("*Quantidade de comentários💬:*" + curtidas +
  "(Total de comentários na semana)")

  document.getElementById("vviews").innerHTML=("*Quantidade de Visualizações👀:*" + views +
  "(Total de visualizações na semana)")

  document.getElementById("ccPost").innerHTML=("*% Aumento/diminuição de interações:*" + cPost +
  "(Porcentagem de aumento ou diminuição nas interações dos seus posts)")

  document.getElementById("ppSeguidores").innerHTML=("*% de seguidores interagindo:*" + pSeguidores +
  "(Porcentagem dos seguidores interagindo com seus posts)")
  
  document.getElementById("hhorario").innerHTML=("*Seu melhor horário de postagem*:" + horario +
  "(Com base nos horários dos seus melhores posts)")

  document.getElementById("mmPost").innerHTML=("**Seu melhor Post foi esse:*" + mPost+
  "(Com base nas interações)")
 

function reload() {
    location.reload()
}

 }