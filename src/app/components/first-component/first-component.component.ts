import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../services/first-service.service';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  users: any[] = [];
  text: string;
	isEdit: boolean = false;
	user = {
		id: null,
		name: '',
		email: '',
		username: ''
	};

  constructor(public firstService:FirstServiceService) {
		this.firstService.getUsers().subscribe((users:any) => {
     this.users = users;
		});
   }

   onSubmit(isEdit) {
		if (isEdit) {
			this.firstService.updateUser(this.user).subscribe((user) => {
				for (let i = 0; i < this.users.length; i++) {
					if (this.users[i].id == this.user.id) {
						this.users.splice(i, 1);
					}
				}
				this.users.unshift(user);
			});
		} else {
  
    this.user.id = Math.floor((Math.random() * 10) + 11);
  
			this.firstService.addUser(this.user).subscribe((user) => {
 
				this.users.unshift(user);
			});
		}
  }
  
  onDeleteClick(id) {
		this.firstService.deleteUser(id).subscribe((res) => {
			for (let i = 0; i < this.users.length; i++) {
				if (this.users[i].id == id) {
					this.users.splice(i, 1);
				}
			}
    },
    error =>{
if(error.status == "404"){
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i].id == id) {
      this.users.splice(i, 1);
    }
  }
}
    });
	}

	onEditClick(user) {
		this.isEdit = true;
		this.user = user;
	}

  ngOnInit() {
  }

}
