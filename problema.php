<?php include "header.php"; ?>
<nav>
  <div class="nav-wrapper">
    <a href="dashboard.php">
    <img src="img/seta.png" style="height:33px;margin:10px 10px">
    </a>
    <a class="brand-logo">#VISUALIZAÇÃO<b>GERAL</b></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
  </div>   
</nav>


<div class="row" ng-controller="CausaProblemaController">
  <br>
      <div class="row">
        <div class="col s12">
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
            <div class="row center">
              <a href="voluntariar.php" class="btn degrade">Participar</a>
            </div>
            <!--<a href="" class="btn left blue">#chamageral</a>-->
        </div>
      </div>
</div>

<?php include "footer.php"; ?>