import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, FAMILIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeAction>
          <Button>
            Subscribe
          </Button>
          <Link href="/#">Already a subscriber?</Link>
        </SubscribeAction>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscribeAction = styled.div`
  display: none;
  justify-self: end;
  align-self: end;

  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 4px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

const Link = styled.a`
  font-family: ${FAMILIES.serif};
  font-style: italic;
  text-decoration: underline;
  font-size: 0.875rem;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  ${ActionGroup}, ${SubscribeAction} {
    display: none;
  }

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;

    ${ActionGroup}, ${SubscribeAction} {
      display: flex;
    }
  }
`;

export default Header;
