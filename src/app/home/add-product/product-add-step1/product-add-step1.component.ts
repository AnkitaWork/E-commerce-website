//External imports
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add-step1',
  templateUrl: './product-add-step1.component.html',
  styleUrls: ['./product-add-step1.component.scss']
})
export class ProductAddStep1Component implements OnInit {
  @Input() data: any; //this variable used to get dialog data 
  public submitted: boolean = false; //submit boolean value check form is submit or not
  public productAddStepOne: FormGroup | any; //form group variable
  public activityDropDownData = [
    { id: 1, displayText: 'Prep for Tomorrow' },
    { id: 1, displayText: 'Prep for Day before Tomorrow' },
    { id: 1, displayText: 'Prep for Yesterday' },
  ];//binding static lookup with activity dropdown

  constructor(private _activeModal: NgbActiveModal, private formBuilder: FormBuilder,) { }

  /**
     * This function is used to submit form value and calling api
     */
  public stepOneSubmitForm() {
    this.submitted = true;
    if (this.productAddStepOne.invalid) {
      return;
    } else {
      // api call
      this.submitted = false;
    }
  }

  /**
    * This function is used to close dialog 
    */
  public close() {
    this._activeModal.close(false);
  }

  /**
    * This function is used to return form control value
    */
  get productAddStepOneFormValue() {
    return this.productAddStepOne.controls;
  }

  ngOnInit(): void {
    this.initStepOneForm(); //create form with field
  }

  /**
    * This function is used to create form and form control fields
    */
  private initStepOneForm() {
    this.productAddStepOne = this.formBuilder.group({
      upc: ['', [Validators.required]],
      activity: ['', [Validators.required]],
      shelfLife: ['', [Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$')]],
      activityInStoreFlag: ['', [Validators.required]],
    });
  }
}
