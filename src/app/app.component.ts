import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    /** Indicates root folder with full images */
    readonly defaultFilePath = 'assets/images/';

    /** Indicates root folder with compressed images */
    readonly compressedFilePath = 'assets/images-compressed/';

    /** Name of each image file */
    readonly photoFileNames = [
        'JAN_6166',
        'JAN_5989',
        'JAN_5978',
        'JAN_5869',
        'JAN_3375',
        'JAN_3144',
        'JAN_2711',
        'JAN_2704',
        'JAN_2643',
        'JAN_2574',
        'JAN_2214',
        'JAN_2113',
    ];

    /** Extension used to display each image file */
    readonly extension = '.jpg';

    constructor(private meta: Meta) {}

    /**
     * On init lifecycle hook
     */
    ngOnInit(): void {
        this.meta.updateTag({ property: 'og:title', content: 'Photos by Namito' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.namitoyokota.com/images/meta.png' });
        this.meta.updateTag({ property: 'og:url', content: 'https://photos.namitoyokota.com' });
    }
}
