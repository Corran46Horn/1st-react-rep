import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';

const Column = (props) =>{


  return (  <article className={styles.column}>
              <span className={styles.icon + ' fa fa-' + props.icon}></span>
              <h2 className={styles.title}>{props.title}</h2>
              <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title}/>)}
              </ul>
              <CardForm columnId={props.id} action={props.action} />
            </article>
  );
};

export default Column;