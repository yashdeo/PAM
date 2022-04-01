package steps;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",glue= {"steps"},
        monochrome = true,
        plugin = {"pretty","html:target/cucumber-report-html","json:target/cucumber.json","junit:target/JUNIT/report.xml"},
        tags = "@hooksDemo"
)

public class TestRunnerForHooks {
}
