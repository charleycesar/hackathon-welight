<?php include "header.php"; ?>
<nav>
  <div class="nav-wrapper">
    <a href="dashboard.php"><i class="material-icons left">brightness_low</i></a>
    <a class="brand-logo">Caso</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
  </div>   
</nav>


<div class="row" ng-controller="CausaProblemaController">
  <br>
      <div class="row">
        <div class="col s12 m6">
            <div class="card white">
              <div class="card-content">
                <span class="card-title">{{causa.titulo}}</span>
                <p class="descricao">{{causa.descricao}}</p>
                    <label class="comp_info">Data: {{causa.data}}</label>
                <br>
                    <label class="comp_info">Local: {{causa.local}}</label>
              </div>
            </div>
            <br>
            <a href="voluntariar.php" class="btn right blue">Colaborar</a>
            <!--<a href="" class="btn left blue">#chamageral</a>-->
        </div>
      </div>
</div>

<?php include "footer.php"; ?>