import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {

  constructor(
    private http: HttpClient,
  ) { }

  listFolder(folderId) {

    const endpoint = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${environment.googleDrive.key}`;

    return this.http.get(endpoint)
    .pipe(
      map((res: any) => res.files)
    );

  }
}
