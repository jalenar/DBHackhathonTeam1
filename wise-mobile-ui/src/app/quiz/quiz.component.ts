import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { setNumber } from "tns-core-modules/application-settings";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { setTimeout } from "tns-core-modules/timer";

@Component({
	selector: "quiz",
	moduleId: module.id,
	templateUrl: "./quiz.component.html",
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

	category: string;

	questions: { question: string, options: string[], correctAnswerIndex: number, rationale: string  }[] = [];

	currentQuestionIndex: number = 0;
	score: number = 0;
	clicked: boolean = false;
	isCorrect: boolean = false;


	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.category = params['category'];
			this.questions = JSON.parse(params['questions']);
		})
	}

	// -------------------------- QUIZ ----------------------------

	selectAnswer(answerIndex: number, args: any) {
		let option = <GridLayout>args.object;
		this.clicked = true;
		if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
			// correct answer
			this.score += 1;
			this.isCorrect = true;
			this.questions[this.currentQuestionIndex].rationale = " You are right! " + this.questions[this.currentQuestionIndex].rationale;
			option.backgroundColor = '#B6EB81';
		}
		else {
			// wrong answer
			this.isCorrect = false;
			this.questions[this.currentQuestionIndex].rationale = " You missed it! " + this.questions[this.currentQuestionIndex].rationale;
			option.backgroundColor = '#ff4b60';
		}
		setTimeout(
			() => {
				this.clicked = !this.clicked;
				option.backgroundColor = '#4446FF';
				if (this.currentQuestionIndex == this.questions.length - 1) {
					this.end();
				}
				else {
					this.currentQuestionIndex += 1;
				}
			}, 3000)
	}

	saveScore() {
		let scorePercentage = Math.round(this.score * 100 / this.questions.length);
		setNumber(this.category, scorePercentage);
	}

	end() {
		this.saveScore();
		this.navigateToScore();
	}

	// ------------------------- NAVIGATION -----------------------------

	navigateToScore() {
		let navigationExtras = {
			queryParams: {
				'score': Math.round(this.score * 100 / this.questions.length)
			}
		};
		this.routerExtensions.navigate(["/app/score"], navigationExtras);
	}

	navigateToPrevious() {
		this.routerExtensions.backToPreviousPage();
	}

}
