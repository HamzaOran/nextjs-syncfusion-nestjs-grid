'use client';

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Filter,
  Group,
} from '@syncfusion/ej2-react-grids';
import { data } from '../app/datasource';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF5cWWZCfEx3R3xbf1x0ZFZMZFRbRH5PMyBoS35RckViWHxednFUQmNUWUJ3'
);

export default function Grid() {
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 5 }}
        allowFiltering={true}
        allowGrouping={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Invoice ID"
            textAlign="Right"
            width="100"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective
            field="ShipCountry"
            headerText="Ship Country"
            textAlign="Right"
            width="200"
          />
          <ColumnDirective
            field="ShipName"
            headerText="Ship Name"
            textAlign="Right"
            width="200"
          />

          <ColumnDirective
            field="Freight"
            format="C2"
            width="100"
            textAlign="Right"
          />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
      </GridComponent>
    </div>
  );
}
