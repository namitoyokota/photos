import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Image {
    id: string;
    alt: string;
    fullImageUrl: string;
    blurredImageUrl: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    /** Indicates when loading text is displayed */
    isLoading = true;

    /** List of images to display */
    images: Image[] = [];

    /** Route of API to retrieve images from */
    readonly apiUrl = 'https://api.namitoyokota.com/images.json';

    constructor(private http: HttpClient) {}

    /**
     * On init lifecycle hook
     */
    ngOnInit(): void {
        this.http.get<Image[]>(`${this.apiUrl}`).subscribe((images) => {
            this.images = images;
            this.isLoading = false;
        });
    }
}
