<?php include "header.php"; ?>

<nav>
  <div class="nav-wrapper">
    <a onclick="javascript:history.back(-1)">
      <img src="img/seta.png" style="height:33px;margin:10px 10px">
    </a>
    <a href="#" class="brand-logo">#CONTATO</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
  </div>   
</nav>

<div class="row" ng-controller="CausaProblemaController">
  <div class="container">
  <br>
  <h5>Como pode ajudar?</h5>
  <p>Envie uma mensagem para o criador deste problema.</p>
    <div class="row">
    <form class="col s12"  method="POST" action="enviar.php">
      <input type="hidden" name="data" value="{{causa}}" />
      <input type="hidden" name="user" value="{{usuario.user}}">
      <div class="row" ng-init="message=false;">

        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Descrição</label>
        </div>

        <div class="input-field col s12 center">
        	<input ng-click="message=true" type="submit" value="enviar" class="btn degrade" />
        </div>
      </div>
    </form>
    <div ng-if="message" class="col s12 sucesso">Mensagem Enviada Com Sucesso.</div>
  </div>
  </div>
</div>


<?php include "footer.php"; ?>