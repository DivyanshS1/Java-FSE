import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input()
  course: any;

  @Input()
  enrolled = false;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  // A getter keeps conditional presentation logic out of the template.
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColour(): string {
    switch (this.course?.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      default: return 'grey';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  enroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(
      'Previous:',
      changes['course']?.previousValue
    );

    console.log(
      'Current:',
      changes['course']?.currentValue
    );

  }

}
