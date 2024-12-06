import { TestBed } from '@angular/core/testing';

import { TecnicoDeLaEmpresaService } from './tecnico-de-la-empresa.service';

describe('TecnicoDeLaEmpresaService', () => {
  let service: TecnicoDeLaEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicoDeLaEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
