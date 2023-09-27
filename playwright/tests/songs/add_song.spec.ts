import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { SongPage } from '../page_objects/song_page';
import { addSong } from './song_helper';

test('Add new song',async ({ page }) => {
    await page.goto('http://192.168.0.30:8080/');
    await addSong(page,
        'Song 2',
        'Artist 2', 
        'Genre 2', 
        'Album 2 ',
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg",
        "https://www.youtube.com/watch?v=k740hisrk_k",
        'TAB', 
        'lyrics'
    );
    var homePage: HomePage = new HomePage(page);

    await expect(homePage.songs.last().locator('.song-title')).toContainText('Song 2');


    
});