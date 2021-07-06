import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingState } from 'src/app/shared/models/loading.model';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private loadingAndErrorState = new BehaviorSubject<LoadingState>(
    {
      message: '',
      loading: false,
      errorState: false,
      activeModal: false
    }
  );
  currentLoadingAndErrorState = this.loadingAndErrorState.asObservable();
  constructor() { }


  handleLoading(newLoadingState: boolean) {
    this.loadingAndErrorState.next({ message: '', loading: newLoadingState, errorState: false, activeModal: false });
  }
  handleError(message, loading, errorState, activeModal) {
    this.loadingAndErrorState.next({ message, loading, errorState, activeModal });
  }
}