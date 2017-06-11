<?php include "header.php"; ?>
<nav>
  <div class="nav-wrapper">
    <i class="material-icons left">brightness_low</i>
    <a class="brand-logo">Dashboard</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    </ul>
    <a href="causa.html" class="right"><i class="material-icons">network_wifi</i></a>
  </div>   
</nav>
<nav>
  <div class="nav-wrapper grey">
    <form>
      <div class="input-field">
        <input id="search" type="search" required>
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
    </form>
  </div>
</nav>

<div class="row">
  <br>
      <div class="row">
        <div class="col s12 m6">
          <a href="problema.php">
            <div class="card white">
              <div class="card-content">
                <span class="card-title">Pintura da escola Capitão Mostarda</span>
                <p class="truncate descricao">Caso de abandono. Há 15 anos, esta escola não é assistida pelo poder público.</p>
                    <label class="comp_info">Data: 12/06/2017</label>
                <br>
                    <label class="comp_info">Local: Ladeira da Glória, 98</label>
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