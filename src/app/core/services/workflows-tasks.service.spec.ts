import { TestBed, inject } from '@angular/core/testing';

import { WorkflowsTasksService } from './workflows-tasks.service';

describe('WorkflowsTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowsTasksService]
    });
  });

  it('should be created', inject([WorkflowsTasksService], (service: WorkflowsTasksService) => {
    expect(service).toBeTruthy();
  }));
});
