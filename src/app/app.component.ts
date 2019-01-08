import { ViewEncapsulation, Component, ViewChild } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import {
    ScheduleComponent, TimelineViewsService, TimelineMonthService, AgendaService,
    GroupModel, EventSettingsModel, ResizeService, DragAndDropService, ActionEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { PagerModule, PageEventArgs } from '@syncfusion/ej2-angular-grids';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [PagerModule, TimelineViewsService, TimelineMonthService, AgendaService, ResizeService, DragAndDropService],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 3, 10);
    public currentView: String = 'TimelineMonth';
    public group: GroupModel = {
        resources: ['Projects', 'Categories']
    };
    public projectDataSource: Object[] = [
        { text: 'Oliver', id: 1, color: '#cb6bb2', HospitalGroupId: 1 },
        { text: 'Mathew', id: 2, color: '#56ca85', HospitalGroupId: 2 },
        { text: 'Bruce Wayne', id: 3, color: '#df5286', HospitalGroupId: 3 },
        { text: 'Kevin', id: 4, color: '#df5286', HospitalGroupId: 3 },
        { text: 'Rick', id: 5, color: '#df5286', HospitalGroupId: 3 }
    ];
    public categoryDataSource: Object[] = [
        { text: 'Project-1', id: 1, color: '#df5286', DoctorGroupId: 1, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-2', id: 2, color: '#7fa900', DoctorGroupId: 1, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-3', id: 3, color: '#7fa900', DoctorGroupId: 1, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-4', id: 4, color: '#df5286', DoctorGroupId: 1, startHour: '02:00', endHour: '19:00' },
        { text: 'Project-5', id: 5, color: '#7fa900', DoctorGroupId: 1, startHour: '10:00', endHour: '15:00' },
        { text: 'Project-6', id: 6, color: '#7fa900', DoctorGroupId: 1, startHour: '06:00', endHour: '12:00' },
        { text: 'Project-7', id: 7, color: '#df5286', DoctorGroupId: 1, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-8', id: 8, color: '#7fa900', DoctorGroupId: 1, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-9', id: 9, color: '#7fa900', DoctorGroupId: 1, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-10', id: 10, color: '#df5286', DoctorGroupId: 1, startHour: '02:00', endHour: '19:00' },

        { text: 'Project-1', id: 1, color: '#df5286', DoctorGroupId: 2, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-2', id: 2, color: '#7fa900', DoctorGroupId: 2, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-3', id: 3, color: '#7fa900', DoctorGroupId: 2, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-4', id: 4, color: '#df5286', DoctorGroupId: 2, startHour: '02:00', endHour: '19:00' },
        { text: 'Project-5', id: 5, color: '#7fa900', DoctorGroupId: 2, startHour: '10:00', endHour: '15:00' },
        { text: 'Project-6', id: 6, color: '#7fa900', DoctorGroupId: 2, startHour: '06:00', endHour: '12:00' },
        { text: 'Project-7', id: 7, color: '#df5286', DoctorGroupId: 2, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-8', id: 8, color: '#7fa900', DoctorGroupId: 2, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-9', id: 9, color: '#7fa900', DoctorGroupId: 2, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-10', id: 10, color: '#df5286', DoctorGroupId: 2, startHour: '02:00', endHour: '19:00' },

        { text: 'Project-1', id: 1, color: '#df5286', DoctorGroupId: 3, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-2', id: 2, color: '#7fa900', DoctorGroupId: 3, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-3', id: 3, color: '#7fa900', DoctorGroupId: 3, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-4', id: 4, color: '#df5286', DoctorGroupId: 3, startHour: '02:00', endHour: '19:00' },
        { text: 'Project-5', id: 5, color: '#7fa900', DoctorGroupId: 3, startHour: '10:00', endHour: '15:00' },
        { text: 'Project-6', id: 6, color: '#7fa900', DoctorGroupId: 3, startHour: '06:00', endHour: '12:00' },
        { text: 'Project-7', id: 7, color: '#df5286', DoctorGroupId: 3, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-8', id: 8, color: '#7fa900', DoctorGroupId: 3, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-9', id: 9, color: '#7fa900', DoctorGroupId: 3, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-10', id: 10, color: '#df5286', DoctorGroupId: 3, startHour: '02:00', endHour: '19:00' },

        { text: 'Project-1', id: 1, color: '#df5286', DoctorGroupId: 4, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-2', id: 2, color: '#7fa900', DoctorGroupId: 4, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-3', id: 3, color: '#7fa900', DoctorGroupId: 4, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-4', id: 4, color: '#df5286', DoctorGroupId: 4, startHour: '02:00', endHour: '19:00' },
        { text: 'Project-5', id: 5, color: '#7fa900', DoctorGroupId: 4, startHour: '10:00', endHour: '15:00' },
        { text: 'Project-6', id: 6, color: '#7fa900', DoctorGroupId: 4, startHour: '06:00', endHour: '12:00' },
        { text: 'Project-7', id: 7, color: '#df5286', DoctorGroupId: 4, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-8', id: 8, color: '#7fa900', DoctorGroupId: 4, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-9', id: 9, color: '#7fa900', DoctorGroupId: 4, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-10', id: 10, color: '#df5286', DoctorGroupId: 4, startHour: '02:00', endHour: '19:00' },

        { text: 'Project-1', id: 1, color: '#df5286', DoctorGroupId: 5, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-2', id: 2, color: '#7fa900', DoctorGroupId: 5, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-3', id: 3, color: '#7fa900', DoctorGroupId: 5, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-4', id: 4, color: '#df5286', DoctorGroupId: 5, startHour: '02:00', endHour: '19:00' },
        { text: 'Project-5', id: 5, color: '#7fa900', DoctorGroupId: 5, startHour: '10:00', endHour: '15:00' },
        { text: 'Project-6', id: 6, color: '#7fa900', DoctorGroupId: 5, startHour: '06:00', endHour: '12:00' },
        { text: 'Project-7', id: 7, color: '#df5286', DoctorGroupId: 5, startHour: '09:00', endHour: '19:00' },
        { text: 'Project-8', id: 8, color: '#7fa900', DoctorGroupId: 5, startHour: '10:00', endHour: '16:00' },
        { text: 'Project-9', id: 9, color: '#7fa900', DoctorGroupId: 5, startHour: '07:00', endHour: '18:00' },
        { text: 'Project-10', id: 10, color: '#df5286', DoctorGroupId: 5, startHour: '02:00', endHour: '19:00' },

    ];

    public allowMultiple: Boolean = true;
    public eventData: Object[] = this.generateEventData(new Date(2018, 3, 1), new Date(2018, 3, 30), 1000);


    public eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], this.eventData, null, true)
    };
    public flag: Boolean = false;
    onActionComplete(args: ActionEventArgs): void {
        if (!this.flag) {
            const page: string = '1' as string;
            this.pageChange(page);
        }
    }
    onSlide(args: PageEventArgs): void {
        const page: string = args.currentPage;
        this.pageChange(page);
        this.flag = true;
    }

    pageChange(page: string) {
        const CurRoomData: Object[] = [];
        const dm: DataManager = new DataManager({ json: this.eventData });
        const dm1: DataManager = new DataManager({ json: this.categoryDataSource });
        const groupFieldId = this.scheduleObj.resources[0].field;
        const val: any = this.projectDataSource[parseInt(page as string, 10) - 1];
        const CurResData: Object[] = dm1.executeLocal(new Query().where('DoctorGroupId', 'equal', val.id));

        const curAppData: Object[] = dm.executeLocal(new Query().where(groupFieldId, 'equal', val.id));
        CurRoomData.push(this.projectDataSource[val.id - 1]);

        this.scheduleObj.resources[0].dataSource = CurRoomData;
        this.scheduleObj.resources[1].dataSource = CurResData;

        this.scheduleObj.eventSettings.dataSource = curAppData;
        this.scheduleObj.dataBind();
    }

    public generateEventData(startDate: Date, endDate: Date, eventCount: number): Object[] {
        const data: Object[] = [];
        const names: string[] = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
            'Farewell Celebration', 'Wedding Aniversary', 'Alaska: The Last Frontier', 'Deadest Catch', 'Sports Day',
            'MoonShiners', 'Close Encounters', 'HighWay Thru Hell', 'Daily Planet', 'Cash Cab', 'Basketball Practice',
            'Rugby Match', 'Guitar Class', 'Music Lessons', 'Doctor checkup', 'Brazil - Mexico', 'Opening ceremony', 'Final presentation'
        ];
        const msPerHour: any = 1000 * 60 * 60;
        let id: any = 1;
        let i: any = 1;
        let j: any = 1;
        const incMs: any = (msPerHour * 24) * 1;
        const generate: Function = () => {
            i++;
            const start: Number = startDate.getTime();
            const end: Number = endDate.getTime();
            for (let a: any = start; a < end; a += incMs) {
                const count: Number = Math.floor((Math.random() * 9) + 1);
                for (let b: any = 0; b < count; b++) {
                    j++;
                    const hour: number = Math.floor(Math.random() * 100) % 24;
                    const minutes: number = Math.round((Math.floor(Math.random() * 100) % 60) / 5) * 5;
                    const nCount: number = Math.floor(Math.random() * names.length);
                    const sDate = new Date(new Date(a).setHours(hour, minutes));
                    const eDate = new Date(sDate.getTime() + (msPerHour * 2.5));
                    data.push({
                        Id: id,
                        Subject: names[nCount],
                        StartTime: sDate,
                        EndTime: eDate,
                        IsAllDay: (id % 10) ? false : true,
                        ProjectId: i,
                        TaskId: j
                    });
                    if (data.length >= eventCount) {
                        return;
                    }
                    id++;
                    if (i > 5) { i = 1; } if (j > 10) { j = 1; }
                }
            }
        }
        while (data.length < eventCount) {
            generate();
        }
        return data;
    }
}
