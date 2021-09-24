import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Guilherme Borges Bastos";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java Developer, Full-stack Java Developer, Android Developer, Nishant kumar Bharti Live Resume, Nishant kumar Bharti Resume, Nishant kumar Bharti CV, Curriculum Nishant kumar Bharti, Nishant Resumo, nishant live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Nishant kumar Bharti" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Full-stack Web Developer. designing web and mobile projects. Find out more in my live-resume!" }
    );
  }
}
