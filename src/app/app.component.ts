import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Used to sort map in HTML by descending order */
    descOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
        return a.key > b.key ? -1 : b.key > a.key ? 1 : 0;
    };

    /** Indicates root folder with full images */
    readonly defaultFilePath = 'assets/images/';

    /** Indicates root folder with compressed images */
    readonly compressedFilePath = 'assets/images-compressed/';

    /** Name of each image file */
    readonly photoFileNames = new Map<string, string>([
        ['JAN_6166', 'condo - bell'],
        ['JAN_5989', 'condo - girls'],
        ['JAN_5978', 'condo - girls'],
        ['JAN_5869', 'hiking - bell'],
        ['JAN_3375', 'beach - girls'],
        ['JAN_3144', 'beach - bell'],
        ['JAN_3042', 'beach - chloe'],
        ['JAN_3564', 'beach - chloe'],
        ['JAN_2711', 'beach walk - lifeguard'],
        ['JAN_2704', 'beach walk - lemonade'],
        ['JAN_2621', 'beach walk - girls'],
        ['JAN_2643', 'beach walk - girls'],
        ['JAN_2572', 'beach walk - lemonade'],
        ['JAN_2214', 'beach condo - girls'],
        ['JAN_2113', 'beach condo - girls'],
        ['JAN_1649', 'denny chimes - hannah and haylee'],
        ['JAN_1817', 'bryant denny - haylee'],
        ['JAN_1849', 'graduation - hannah'],
        ['JAN_1853', 'graduation - hannah'],
        ['JAN_1887', 'graduation - hannah'],
        ['JAN_1894', 'graduation - haylee'],
        ['JAN_1267', 'gulf coast - speaker'],
        ['JAN_1986', 'gulf coast - worship'],
        ['JAN_2067', 'gulf coast - worship'],
        ['JAN_3726', 'horse - bell'],
        ['JAN_3736', 'horse - bell'],
        ['JAN_3852', 'horse - anna'],
        ['JAN_4137', 'hiking - braden'],
        // ['JAN_1807', 'bryant denny - hannah and haylee']
        // ['JAN_1811', 'bryant denny - haylee']
        // ['JAN_2740' 'beach chair'],
    ]);

    /** Extension used to display each image file */
    readonly extension = '.jpg';

    constructor() {
        console.log(this.photoFileNames);
    }
}
