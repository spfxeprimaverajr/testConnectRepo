import * as React from 'react';
import styles from './Mytestgit.module.scss';
import { IMytestgitProps } from './IMytestgitProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Mytestgit extends React.Component<IMytestgitProps, {}> {
  public render(): React.ReactElement<IMytestgitProps> {
    return (
      <div className={styles.mytestgit}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint Test 222git s!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
