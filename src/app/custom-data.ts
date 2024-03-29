import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';

import {CompleterData, CompleterItem} from 'ng2-completer';

export class CustomData extends Subject<CompleterItem[]> implements CompleterData {
   constructor(private http: Http) {
      super();
   }
   public search(term: string): void {
       this.http.get('http://mysafeinfo.com/api/data?list=seinfeldepisodes&format=json&nm=' + term + ',contains')
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                const data = res.json();
                const matches: CompleterItem[] = data.map((episode: any) => {
                    return {
                        title: episode.nm
                    };
                });
                this.next(matches);
           })
           .subscribe();
   }

 public cancel() {
     // Handle cancel
 }
}
