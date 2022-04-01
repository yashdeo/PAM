$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HooksDemoDisplay.feature");
formatter.feature({
  "name": "Check hooks with login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the hooks",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooksDemo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Login Page for hooks demo",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HooksDemoSteps.user_is_on_the_Login_Page_for_hooks_demo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login name and password and login",
  "keyword": "When "
});
formatter.match({
  "location": "steps.HooksDemoSteps.user_enters_login_name_and_password_and_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.HooksDemoSteps.home_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});