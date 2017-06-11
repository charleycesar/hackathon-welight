<?php include "header.php"; ?>

<nav>
  <div class="nav-wrapper">
    <a href="dashboard.php"><i class="material-icons left">brightness_low</i></a>
    <a href="#" class="brand-logo">Novo problema</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
  </div>   
</nav>
<div class="row">
  <div class="container" ng-controller="CausaAdicionarController">
  <br>
  <h5>Crie seu problema</h5>
    <div class="row">
    <form class="col s12">
      <div class="row">

        <div class="input-field col s12">
          <input id="last_name" type="text" ng-model="form.titulo" class="validate">
          <label for="last_name">Título</label>
        </div>

        <div class="input-field col s12">
          <textarea id="textarea1" ng-model="form.descricao" class="materialize-textarea"></textarea>
          <label for="textarea1">Descrição</label>
        </div>


        <div class="input-field col s12">
          <input id="last_name" type="text" ng-model="form.data" class="validate">
          <label for="last_name">Data</label>
        </div>


        <div class="input-field col s12">
          <input id="last_name" type="text" ng-model="form.local" class="validate">
          <label for="last_name">Local</label>
        </div>


        <div class="input-field col s12 hide">
          <input id="last_name" type="text" ng-model="form.status" class="validate" value="0">
          <label for="last_name">Status</label>
        </div>

        <div class="input-field col s12">
        	<input type="submit" name="" ng-click="salvarCausa();" value="#chamageral" class="btn right blue">
        </div>
      </div>
    </form>
  </div>
  </div>
</div>


<?php include "footer.php"; ?>