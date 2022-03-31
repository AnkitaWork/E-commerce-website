import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {
  public submitted: boolean = false; //submit boolean value check form is submit or not
  public productAddStepOne: FormGroup | any; //form group variable
  public displayBasic: boolean = true;
  public activityDropDownData = [
    { id: 1, displayText: 'Prep for Tomorrow' },
    { id: 1, displayText: 'Prep for Day before Tomorrow' },
    { id: 1, displayText: 'Prep for Yesterday' },
  ];//binding static lookup with activity dropdown
  public stepManageVariable: number = 1;
  public country = [
    {
      "id": 1000,
      "counteryName": "011-Atlanta",
      "text": 'Shelf Me and UPS status may be updated'
    },
    {
      "id": 1001,
      "counteryName": "002-Centeral",
      "text": 'Shelf Me and UPS status may be updated'
    },
    {
      "id": 1002,
      "counteryName": "035-Delta",
      "text": 'Shelf Me and UPS status may be updated'
    }
  ];
  public totalRecords: number = 0;
  public selectAll: boolean = false;
  public selectedCountry = this.country;

  constructor(private ref: DynamicDialogRef, private formBuilder: FormBuilder,) { }

  /**
     * This function is used to submit form value and calling api
     */
  public stepOneSubmitForm() {
    this.submitted = true;
    if (this.productAddStepOne.invalid) {
      return;
    } else {
      // api call
      this.stepManageVariable = 2;
      this.submitted = false;
    }
  }

  /**
    * This function is used to close dialog
    */
  public close() {
    this.ref.close(true);
  }

   /**
    * This function is used going to back step
    */
  public backStep(stepIndex: number) {
    this.stepManageVariable = stepIndex;
  }

   /**
    * This function is used to submit second step
    */
  public stepTwoSubmitForm() {
    this.stepManageVariable = 3;
  }

  /**
    * This function is used to add another product
    */
  public addAnotherProduct() {
    this.stepManageVariable = 0;
  }

  /**
    * This function is used to return form control value
    */
  get productAddStepOneFormValue() {
    return this.productAddStepOne.controls;
  }

   /**
    * This function is used to onselection changes
    */
  public onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedCountry = value;
  }

   /**
    * This function is used to select deselect event
    */
  public onSelectAllChange(event: any) {
    const checked = event.checked;
    if (checked) {
        this.selectedCountry = [...this.country];
        this.selectAll = true;
    }
    else {
      this.selectedCountry = [];
      this.selectAll = false;
    }
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
