<?php include "header.php"; ?>
<nav>
  <div class="nav-wrapper">
    <i class="material-icons left">brightness_low</i>
    <a class="brand-logo">Dashboard</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
  </div>   
</nav>
<div class="row" ng-controller="CausaController">
  <br>
{{usuario}}
      <div class="row" ng-repeat="row in causas">
        <div class="col s12 m6">
          <a ng-click="salvaProblemaParaProximaPagina(row._id)">
            <div class="card white">
              <div class="card-content">
                <span class="card-title">{{row.titulo}}</span>
                <p class="truncate descricao">{{row.descricao}}</p>
                    <label class="comp_info">Data: {{row.data}}</label>
                <br>
                    <label class="comp_info">Local: {{row.local}}</label>
              </div>
            </div>
          </a>
        </div>
      </div>

</div>
<div class="fixed-action-btn">
    <a class="btn-floating btn-large red" href="novo_problema.php">
      <i class="large material-icons">add</i>
    </a>
  </div>

<?php include "footer.php"; ?>