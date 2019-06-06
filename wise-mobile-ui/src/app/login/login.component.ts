import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    public userName: string;
    public password: string;

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onUserChange(args) {
        let textField = args.object;
        this.userName = textField.text;
    }

    public onPasswordChange(args) {
        let textField = args.object;
        this.password = textField.text;
    }

    async onLogin() {
        console.log('login click' + this.userName);
        try {
            if(this.userName =='tio.rico@wise.com' && this.password){
                await this.router.navigateByUrl('/app/home');
            }
        } catch (err) {
            console.log(err);
        }
    }
}
