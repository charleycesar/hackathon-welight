<?php include "header.php"; ?>

<nav>
  <div class="nav-wrapper">
    <a href="dashboard.php"><i class="material-icons left">brightness_low</i></a>
    <a href="#" class="brand-logo">Voluntariar</a>
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
    <form class="col s12" action="enviar.php" method="POST">
      <input type="hidden" name="data" value="{{causa}}" />
      <input type="hidden" name="user" value="{{usuario.user}}">
      <div class="row">

        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Descrição</label>
        </div>


        <div class="input-field col s12">
        	<input type="submit" value="#chamageral" class="btn right blue" />
        </div>
      </div>
    </form>
  </div>
  </div>
</div>


<?php include "footer.php"; ?>