import { Component } from "@angular/core";

@Component({
selector:'pm-root',
template:`<div style="text-align:center">
<h1>
  {{pageTitle}}
</h1>
<div>
  {{content}}
</div>
... Starter Files ...
</div>
`
})
export class AppComponent{
  pageTitle:string = 'Acme this  now works correctly';
  content: string = "this is the page content in it's own div"
}