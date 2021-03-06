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
              <span className={styles.title}>This is now good for TESTING</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>This is now on Dev Stage</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
