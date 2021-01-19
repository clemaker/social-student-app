import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private navController: NavController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.platform.backButton.subscribeWithPriority(1, () => {
                this.navController.back();
            });
        });
    }
}
