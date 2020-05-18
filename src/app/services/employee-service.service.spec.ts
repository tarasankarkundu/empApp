import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[EmployeeService],
      imports: [
        HttpClientTestingModule
      ]
    })
  });

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
