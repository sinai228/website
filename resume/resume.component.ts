import { Component, OnInit } from "@angular/core";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  file = faFileDownload;

  pdfSource = "/assets/Sinai_Park_resume_21.pdf";
}
