import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ДОСТАВКА И ВОЗВРАТ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <h4>Стандартная Доставка</h4>
           <p>Доставка 1-3 рабочих дней</p>
          </Typography>
          <Typography>
           <h4>Экспресс-доставка</h4>
           <p>Доставка в течение 4-5 часов</p>
           <p>Сроки доставки начинаются через один рабочий день после размещения заказа. Посетите Мой заказ , чтобы проверить самый последний статус вашего заказа.</p>
           <p>Любые пошлины и налоги на импорт, которые вам может потребоваться заплатить при доставке, будут рассчитаны и добавлены к общей сумме вашего заказа до того, как вы оформите заказ.</p>
          </Typography>
          <Typography>
           <h4>Легкий возврат</h4>
           <p>В случае брака у вас есть 3 дня с момента доставки, чтобы выполнить нашу быструю и простую процедуру возврата.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
