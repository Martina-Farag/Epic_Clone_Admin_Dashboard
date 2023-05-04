import { Component } from '@angular/core';
// import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
// import { Store } from '../app/Modules/store'; 
// import { IProduct } from '../app/Modules/iproduct';

@Component({
  selector: 'app-root',  // defult: app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin Epic Games';

  // store = new Store("my store", "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg", []);

}

// ng serve > to run project
// ng serve -o > to run project and open the chrome tab
//** Angular Live Development Server is listening on localhost:4200,
  // open your browser on http://localhost:4200/ **  <<<
// to build the project open terminal in all project file and run > ng build
// ng g c component_name
// ng g s services_name 
// ng g i interface_name
// ng g d directive_name
// ng g p pipe_name
// in src file open terminal > ng g environments
// in file Guards open terminal > ng g guard guard_name > choose CanActivate
// in components file generate module > ng g m module_name
// in userModule file generate your component > ng g c component_name

/// To make json-server that Created for front-end developers who need a quick back-end for prototyping and mocking.
// a. in  global cmd run command npm install -g json-server
// b.	Create "new folder" (In any path) and open a new cmd in this path.
// c.	Install JSON Server in that folder > npm i json-server (notice that the installed 3 files can be hidden and you will not see any changes after the installation but they are Existing)
// d.	Create a "db.json" file (In your project folder) & add data format db.json file.
// e.	Start JSON Server (in terminal) > json-server --watch db.json
// f.	You can access your fake json server from this URL > http://localhost:3000 

// json-server allways run on port 3000
// npm install chart.js --save    >    to use chart.js   >    import Chart from 'chart.js';