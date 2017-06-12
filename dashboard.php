<?php include "header.php"; ?>
<nav>
  <div class="nav-wrapper">
    
    <a class="brand-logo">#LISTA<b>GERAL<b></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
  </div>   
</nav>
<div class="row" ng-controller="CausaController">
  <br>
      <div class="row casebox" ng-repeat="row in causas" style="margin-bottom:0;cursor:pointer;">
        <div class="col s12">
          <a ng-click="salvaProblemaParaProximaPagina(row._id)">
            <div class="degrade white-text" style="margin-bottom:-7px;padding:8px 18px;border-top-right-radius: 10px">{{row.titulo}}</div>
            <div class="card">
              <div class="card-content">
                <p class="truncate descricao" style="font-weight: normal;margin-bottom:0!important">{{row.descricao}}</p>
                    <label class="comp_info">Data: <span class="dates">{{row.data}}</span></label>
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