<?php include "header.php"; ?>

<div class="row" ng-controller="LoginController">
	<div class="container center-align"><br><br>
	<h5>Login</h5><br>
	<span ng-if="erro" class="red-text">{{erro}}</span>
		<div class="col s12 center-align">
			<input type="text" ng-model="form.username" placeholder="Email">
			<input type="password" ng-model="form.password" placeholder="senha"><br>&nbsp;<br>
			<a href="frontpage.php" class="btn degrade left">Voltar</a>
			<input type="submit" name="" value="LOGAR" ng-click="login();" class="btn right degrade">
		</div>
	</div>
</div>

<?php include "footer.php"; ?>