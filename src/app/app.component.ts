import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
export class AppComponent implements OnInit, OnDestroy {
    /** Indicates when loading text is displayed */
    isLoading = true;

    /** List of images to display */
    images: Image[] = [];

    /** Route of API to retrieve images from */
    readonly imagesApiUrl = 'https://api.namitoyokota.com/images.json';

    /** Key used to store API response */
    readonly cacheKey = 'images';

    /** Subscription to listen to get images API call */
    private imageSubscription = new Subscription();

    constructor(private http: HttpClient) {}

    /**
     * On init lifecycle hook
     */
    ngOnInit(): void {
        this.imageSubscription = this.http.get<Image[]>(this.imagesApiUrl).subscribe({
            next: (images) => {
                this.images = images;
                localStorage.setItem(this.cacheKey, JSON.stringify(this.images));
                this.isLoading = false;
            },
            error: () => {
                const cachedImages = JSON.parse(localStorage.getItem('images') as string);
                if (cachedImages?.length) {
                    console.info('Found cached API response in local storage.');
                    this.images = cachedImages;
                }

                this.isLoading = false;
            },
        });
    }

    /**
     * On destroy lifecycle hook
     */
    ngOnDestroy(): void {
        this.imageSubscription.unsubscribe();
    }
}
