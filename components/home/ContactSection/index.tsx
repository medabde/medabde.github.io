/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSectionsInfo from '../../../content/_sectionsInfo';
import { classNames } from '../../../utils/helpers';
import ButtonBase from '../../global/ButtonBase';
import Container from '../../global/Container';

const CONTACT_URL = 'https://formspree.io/f/mrgddeaz';

const ContactSection = () => {
  const { t } = useTranslation();
  const { contact } = useSectionsInfo();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendButtonClicked, setSendButtonClicked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorSending, setErrorSending] = useState(false);

  const isFieldValid = (fieldValue: string, isEmail?: boolean): boolean => {
    if (!fieldValue) return false;
    if (!isEmail) return fieldValue.length > 0;
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue);
  };

  const areAllFieldsValid = () => {
    return isFieldValid(name) && isFieldValid(email, true) && isFieldValid(message);
  };

  const onSubmit = () => {
    setSendButtonClicked(true);
    if (areAllFieldsValid()) {
      setSending(true);
      fetch(CONTACT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then(response => response.json())
        .then(() => {
          resetSuccess();
        })
        .catch(error => {
          resetError();
          console.error('Error:', error);
        });
    }
  };

  const resetSuccess = () => {
    setSending(false);
    setMessageSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };
  const resetError = () => {
    setSending(false);
    setErrorSending(true);
  };

  useEffect(() => {
    setSendButtonClicked(false);
  }, [name, email, message]);

  useEffect(() => {
    if (messageSent) {
      setTimeout(() => {
        setMessageSent(false);
      }, 2000);
    }
  }, [messageSent]);

  useEffect(() => {
    if (errorSending) {
      setTimeout(() => {
        setErrorSending(false);
      }, 2000);
    }
  }, [errorSending]);

  if (messageSent) {
    return (
      <div className="flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="assets/check.gif" className="h-96 w-96" alt="" />
      </div>
    );
  }

  return (
    <Container title={contact.title} id={contact.id}>
      <div className="flex items-center justify-center">
        <form className="w-full max-w-4xl pb-14">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <TextInput
                title={t('full-name')}
                errorMessage={t('error-full-name')}
                placeholder={t('john-doe')}
                updateText={(text: string) => {
                  setName(text);
                }}
                isValid={!sendButtonClicked ? true : isFieldValid(name)}
                key="name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <TextInput
                title={t('email')}
                errorMessage={t('error-email')}
                placeholder={t('john-doe-email')}
                type="email"
                updateText={(text: string) => {
                  setEmail(text);
                }}
                isValid={!sendButtonClicked ? true : isFieldValid(email, true)}
                key="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <TextInput
                title={t('message')}
                placeholder={t('share-thoughts')}
                errorMessage={t('error-message')}
                updateText={(text: string) => {
                  setMessage(text);
                }}
                isValid={!sendButtonClicked ? true : isFieldValid(message)}
                isTextArea
                key="message"
              />
            </div>
          </div>
          {errorSending && <p className="mb-4 text-red-500">{t('error-sending-message')}</p>}
          <div className="md:flex md:items-center">
            <div className="w-full">
              <ButtonBase onClick={onSubmit} type="primary" disabled={sending} className="w-full uppercase">
                {sending && <img className="animate-spin w-6 h-6" src="assets/loader.png" />} {t('send')}
              </ButtonBase>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

type TextInputProps = {
  key: string;
  title: string;
  type?: string;
  placeholder: string;
  isTextArea?: boolean;
  updateText: Function;
  isValid: boolean;
  errorMessage: string;
};

const TextInput = ({ title, placeholder, isTextArea, updateText, isValid, key, type, errorMessage }: TextInputProps) => {
  const label = (
    <label className="block uppercase tracking-wide text-palette-light-primary dark:text-gray-300 text-xs font-bold mb-2" htmlFor={key}>
      {title}
    </label>
  );

  const error = !isValid && <p className="text-red-500 text-xs italic">{errorMessage}</p>;

  if (!isTextArea) {
    return (
      <>
        {label}
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) => updateText((e.target as HTMLTextAreaElement).value)}
          className={classNames(!isValid ? 'border-red-300' : 'border-gray-200', 'dark:bg-palette-light-secondary appearance-none block w-full bg-gray-50 text-gray-700 dark:text-gray-300 border-2  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500')}
          name={key}
          id={key}
          type={type ? type : 'text'}
          placeholder={placeholder}
        />
        {error}
      </>
    );
  }

  return (
    <>
      {label}
      <textarea
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => updateText((e.target as HTMLTextAreaElement).value)}
        className={classNames(
          !isValid ? 'border-red-300' : 'border-gray-200',
          'no-resize appearance-none block w-full bg-gray-100 dark:bg-palette-light-secondary  text-gray-700 dark:text-gray-300 border-2  rounded pt-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none',
        )}
        id={key}
        name={key}
        placeholder={placeholder}
      ></textarea>
      {error}
    </>
  );
};
export default ContactSection;
