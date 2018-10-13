import { DocumentChangeAction } from "@angular/fire/firestore";

export interface FirestoreCollectionItemStream {
  id: string;
  stream: DocumentChangeAction<any>;
  data: any;
}
