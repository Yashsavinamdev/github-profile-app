import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css'],
})
export class CommonDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      title: string;
      message: string;
      icon: string;
      configData?: {
        oldData: string;
        newData: string;
      };
      statusData: number;
      primaryBtnText: string;
      secondaryBtnText: string;
      colour: string;
    },
    private dialogRef: MatDialogRef<CommonDialogComponent>
  ) {}
  ngOnInit(): void {}

  isArray(data: string | Array<string>) {
    return Array.isArray(data);
  }

  onSubmit() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
